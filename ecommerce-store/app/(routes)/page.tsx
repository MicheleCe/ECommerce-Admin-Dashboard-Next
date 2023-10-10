import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'

import Billboard from '../components/ui/billboard'
import Container from '../components/ui/container'
import ProductList from '../components/ui/product-list'

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  //tochange need to insert manually the BillboardId
  const billboard = await getBillboard('b79dc540-0f0e-4828-bd2a-896b15781d54')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
