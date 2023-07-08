export default async function handler(req, res) {
  try {
    const response = await fetch('https://quotes.alakhpc.com/quotes?show=suits&character=Harvey_Specter')
    const result = await response.json()
    const quote = result.text
    res.status(200).json({ text: quote, message: 'Success' })
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
