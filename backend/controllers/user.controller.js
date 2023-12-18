const Crypto = require('crypto')
const bcrypt = require('bcryptjs')
const User = require('../models/users.model')

const {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage
} = require('firebase/storage')

const { matchedData } = require('express-validator')
const { handleError } = require('../utils/handlerError')

async function createUser(req, res) {
  const result = matchedData(req)
  const { email, password } = result

  const storage = getStorage()
  try {
    let user = await User.findOne({ email })
    if (user) {
      return handleError(res, 'Email ya utilizado', 400)
      // return res.status(400).json({ errors: { msg: 'Email ya utilizado' } })
    }

    user = new User(result)
    user.uid = Crypto.randomUUID()
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    if (req.file !== undefined) {
      const storageRef = ref(storage, `files/${user.uid}`)

      const metadata = {
        contentType: req.file.mimetype
      }

      const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata
      )

      const downloadURL = await getDownloadURL(snapshot.ref)

      user.avatar = downloadURL
      await user.save()

      return res.status(201).json({
        data: {
          msg: 'Usuario creado exitosamente'
        }
      })
    }

    user.avatar =
      'https://firebasestorage.googleapis.com/v0/b/chefgpt-bd4ac.appspot.com/o/files%2Fbot.png?alt=media&token=c231e100-b011-48a0-8291-ad68b3b331c9'

    await user.save()

    res.status(201).json({
      data: {
        msg: 'Usuario creado exitosamente'
      }
    })
  } catch (error) {
    console.log(error)
    return handleError(res, 'Error Interno', 500)
  }

  // try {
  // } catch (error) {
  //   console.log(error)
  //   return handleError(res, 'Error Interno', 500)
  //   // res.status(500).json({ errors: { msg: 'Error Interno', error } })
  // }
}
async function editUser() {}
async function deleteUser() {}

module.exports = { createUser, editUser, deleteUser }
