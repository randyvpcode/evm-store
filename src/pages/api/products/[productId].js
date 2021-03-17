import data from '../../../data/db'
import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS']
  })
)

export default async function handler(req, res) {
  const { productId } = req.query
  const product = data.products.find(
    (val) => parseInt(val.id) === parseInt(productId)
  )
  await cors(req, res)

  res.status(200).json({ product })
}
