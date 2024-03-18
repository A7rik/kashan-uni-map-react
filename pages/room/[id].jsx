import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Connector from "../../components/SideBar/sideBarConnector";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function Home({data}) {
  const [value, setValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const pathname = usePathname();
  const [pageName, setPageName] = useState(null);

  const fetchValueFromPrisma = async () => {
    setIsLoading(true);
    if(pageName!=undefined && pageName!=null){
    try {
      
        const response = await fetch(
          `/api/DBfindMany?table=prof&id=${pageName}&culomn=roomId`
          );
          //console.log(response);
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
          const data1 = await response.json();
          setValue(data1);
          setError(null);
        } catch (error) {
          setError(error);
          console.error("Error fetching value from prisma:", error);
        } finally {
    }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchValueFromPrisma();
  }, [pageName]);
  useEffect(() => {
    if (pathname) {
      setPageName(pathname.split("/")[2]);
    }
  }, [pathname]);

  if (isLoading) {
    return;
  }

  if (error) {
    return;
  }
  return <Connector content={value} roomPage={true} />;
}





