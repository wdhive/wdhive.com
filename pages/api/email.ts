import Email from '@/model/Email'

export default async function (req: any, res: any) {
  const email = req.body

  try {
    const doc = await Email.create({ email })
    res.json({ email: doc })
  } catch (err: any) {
    if (err.code !== 11000) {
      return res.json({ email: null })
    }

    const doc = await Email.findOne({ email })
    res.json({ email: doc, alreadyExists: true })
  }
}
