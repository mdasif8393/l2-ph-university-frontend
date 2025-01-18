import { Button, Table } from "antd";
import { useGetAllDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicDepartment = () => {
  const {
    data: departmentData,
    isLoading,
    isFetching,
  } = useGetAllDepartmentsQuery(undefined);
  console.log(departmentData);

  const tableData = departmentData?.data?.map(({ _id, name }) => ({
    key: _id,
    _id,
    name,
  }));

  const columns: any = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicDepartment;
