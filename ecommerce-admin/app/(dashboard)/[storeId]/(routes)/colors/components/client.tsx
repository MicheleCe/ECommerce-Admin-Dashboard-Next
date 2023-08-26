"use client";

import { ApiList } from "@/components/ui/api-list";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { colorColumn, columns } from "./columns";


interface ColorClientProps {
    data: colorColumn[];
}
export const ColorClient : React.FC<ColorClientProps> = ({data}) => {

    const router = useRouter();
    const params = useParams();
    console.log(data);
    
    return(
        <>
            <div className="flex items-center justify-between">
             <Heading
             title= {`Colors (${data.length})`}
             description="Manage colors for your store"/>
             <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
                <Plus className="mr-2 h-4 w-4"/>
                Add new
             </Button>
            </div>
             <Separator/>
             <DataTable columns={columns} data={data} searchKey="name"/>
             <Heading title="API" description="API calls for colors"/>
             <Separator/>
             <ApiList entityName="colors" entityIdName="colorId"/>
        </>
    )
}