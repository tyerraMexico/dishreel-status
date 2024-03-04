import { writeFile } from 'node:fs/promises'
import path from 'node:path'

interface Status {
  id: number
  status: string
}

const saveSatus = async (status: Status): Promise<void> => {
  const ROOT_PATH = process.cwd()
  const filePath = path.join(ROOT_PATH, 'status.json')
  await writeFile(filePath, JSON.stringify(status, null, 2), 'utf-8')
}

export default saveSatus
