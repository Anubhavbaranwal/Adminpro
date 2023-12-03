import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addlist, filtereddata } from "./utils/Dataslice";
import { filterData, filterData2 } from "./Filterdata";
import ReactPaginate from "react-paginate";

const Maincontainer = ({ data }) => {
  const dispatch = useDispatch();
  dispatch(filtereddata(data));
  const datalist2 = useSelector((store) => store?.data?.filter);
  const datalist = useSelector((store) => store?.data?.filter);
  const [SearchText, setSearchText] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = datalist?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(datalist?.length / itemsPerPage);
  const [searchresult, setSearchresult] = useState(
    datalist?.slice(0, 10) || []
  );
  console.log(searchresult);

  useEffect(() => {
    // Update searchresult whenever datalist changes
    setSearchresult(datalist?.slice(itemOffset, endOffset) || []);
  }, [datalist, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % datalist.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  //Search button
  const handleSubmit = () => {
    console.log(SearchText);
    console.log(datalist2);
    const data = filterData(SearchText, datalist2);
    setSearchresult(data);
  };

  //deletedata
  const deletedata = (id) => {
    const remaindata = filterData2(id, searchresult);
    setSearchresult(remaindata);
  };

  //edit data
  const edit = (id) => {
    // const getdata = filterData(id, searchresult);
    // setSearchresult(getdata);
  };
  return (
    <div>
      <div className="flex place-content-center pt-4">
        <input
          type="text "
          placeholder="Search"
          className="mx-3 p-2 px-2 w-96 border border-gray-200 rounded-md hover:border max-md:w-auto"
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 px-4 bg-red-500 text-white rounded-md hover:shadow-md max-md:mt-2"
          onClick={() => handleSubmit()}
        >
          Search
        </button>
      </div>
      <div className="text-white flex mx-5 grid grid-cols-4 gap-4 mt-4 pt-10">
        <input type="checkbox" />
        <p>Name</p>
        <p>Email</p>
        <p>Actions</p>
      </div>
      {searchresult &&
        searchresult.map((data) => {
          return (
            <div
              className="text-white grid   mx-5 grid-cols-4 gap-4 my-4 py-2"
              key={data?.id}
            >
              <input type="checkbox" />
              <p>{data?.name}</p>
              <p>{data?.email}</p>
              <p>
                <button
                  className="mr-2 bg-white px-2 rounded-lg text-black"
                  onClick={() => edit(data?.id)}
                >
                  edit
                </button>
                <button
                  className="bg-red-500 px-2 rounded-lg"
                  onClick={() => deletedata(data?.id)}
                >
                  delete
                </button>
              </p>
            </div>
          );
        })}
      <footer className="bottom-0">
        <ReactPaginate
          className="bg-white text-black flex px-2 place-content-center gap-4 bottom-0 "
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </footer>
    </div>
  );
};

export default Maincontainer;
