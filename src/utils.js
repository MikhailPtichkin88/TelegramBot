import { unlink } from 'fs/promises'

export async function removeFile(path) {
  try {
    await unlink(path)
  } catch (err) {
    console.log('Error while removing file', err.message)
  }
}