import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "..";

const Pages = observer(() => {
  const { device } = useContext(Context);
  const pageCount = Math.ceil(device.totalCount / device.limit)
  const pages  = []
  for(let i = 0; i<pageCount; i++) {
    pages.push(i + 1)
  }
  console.log(pages.length, 'pages')
  console.log(pageCount, 'pageCount')
  console.log(device.limit, 'limit')
  console.log(device.totalCount, 'device.totalCount')


   return (
    
    <Pagination className="mt-5">
        {pages.length > 1 ? pages.map(page => {
            {return<Pagination.Item 
                key={page}
                active={device.page === page}
                onClick={() => device.setPage(page)}
                
        >{page}</Pagination.Item>}
          
        }): ''}
    </Pagination>
  );
});

export default Pages;
