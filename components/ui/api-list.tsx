"use client";

import { useParams } from "next/navigation";
import { useOrigin } from "@/hooks/use-orgin";
import { ApiAlert } from "@/components/ui/api-alert";

interface ApiListProps {
    entityName: string;
    entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
    entityName,
    entityIdName,
}) => { 
    const params = useParams();
    const origin = useOrigin();

    const baseUrll = `${origin}/api/${params.storeId}`;

return (
   <>
   <ApiAlert
    title="GET"
    variant="public"
    description=""
   />
   </>
    )
}
