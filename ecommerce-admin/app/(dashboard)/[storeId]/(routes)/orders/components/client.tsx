'use client'

import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@radix-ui/react-separator'
import { useParams, useRouter } from 'next/navigation'
import { OrderColumn, columns } from './columns'

interface OrderCLientProps {
    data: OrderColumn[]
}
export const OrderClient: React.FC<OrderCLientProps> = ({ data }) => {
    const router = useRouter()
    const params = useParams()
    console.log(data)

    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description="Manage orders for your store"
            />
            <Separator />
            <DataTable columns={columns} data={data} searchKey="label" />
        </>
    )
}
