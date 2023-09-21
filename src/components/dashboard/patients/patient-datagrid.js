import React from "react";
import dynamic from "next/dynamic";
import { Column, Paging, Pager } from "devextreme-react/data-grid";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});

const PatientDataGrid = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const users = [
    {
      number: "1",
      id_number: "1234821",
      name: "Marcos Ochieng",
      country: "Kenya",
      gender: "Male",
      age: "34",
      status: "Active",
    },
    {
      number: "2",
      id_number: "70081234",
      name: "Derrick Kimani",
      country: "Uganda",
      gender: "Male",
      age: "23",
      status: "Active",
    },
    {
      number: "3",
      id_number: "1234821",
      name: "Jane Munyua",
      country: "Tanzania",
      gender: "Female",
      age: "70",
      status: "Active",
    },
    {
      number: "3",
      id_number: "70081234",
      name: "Ann Kibet",
      country: "Burundi",
      gender: "Male",
      age: "49",
      status: "Active",
    },
    {
      number: "4",
      id_number: "1234821",
      name: "Ann Ochieng",
      country: "Rwanda",
      gender: "Female",
      age: "88",
      status: "Active",
    },
    {
      number: "5",
      id_number: "1234821",
      name: "Marcos Ochieng",
      country: "Kenya",
      gender: "Male",
      age: "34",
      status: "Active",
    },
    {
      number: "6",
      id_number: "70081234",
      name: "Derrick Kimani",
      country: "Uganda",
      gender: "Male",
      age: "23",
      status: "Active",
    },
    {
      number: "7",
      id_number: "1234821",
      name: "Jane Munyua",
      country: "Tanzania",
      gender: "Female",
      age: "70",
      status: "Active",
    },
  ];

  //   filter users based on search query
  const filteredUser = users.filter((user) => {
    return user.name.toLocaleLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section>
      <div className="flex items-center justify-end my-4">
        <input
          className="border rounded border-gray-400 py-3 px-2 focus:outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          fullWidth
          placeholder="Search..."
        />
      </div>
      <DataGrid
        dataSource={filteredUser}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
        remoteOperations={true}
        showColumnLines={true}
        showRowLines={true}
        wordWrapEnabled={true}
        allowPaging={true}
        // height={"60vh"}
        className="shadow"
      >
        <Pager
          visible={true}
          // allowedPageSizes={allowedPageSizes}
          showPageSizeSelector={true}
          showNavigationButtons={true}
        />
        <Column dataField="number" caption="NO" width={80} />
        <Column dataField="id_number" caption="ID" width={140} />
        <Column
          dataField="name"
          caption="Name"
          width={200}
          allowFiltering={true}
          allowSearch={true}
        />
        <Column dataField="age" caption="Age" width={140} />
        <Column dataField="country" caption="Country" width={200} />
        <Column dataField="gender" caption="Gender" width={200} />
        <Column dataField="country" caption="Other" width={200} />
      </DataGrid>
    </section>
  );
};

export default PatientDataGrid;
