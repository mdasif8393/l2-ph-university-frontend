import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import moment from "moment";
import { useState } from "react";
import {
  useGetAllRegisteredSemestersQuery,
  useUpdateRegisteredSemesterMutation,
} from "../../../redux/features/admin/courseManagement.api";
import { TSemester } from "../../../types/courseManagement.type";

export type TTableData = Pick<TSemester, "status" | "startDate" | "startDate">;

const items = [
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];

const RegisteredSemester = () => {
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllRegisteredSemestersQuery(undefined);

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      _id,
      status,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
    })
  );

  const [semesterId, setSemesterId] = useState("");
  const [updateSemester] = useUpdateRegisteredSemesterMutation();

  const handleStatusUpdate = (data) => {
    const updateData = {
      id: semesterId,
      data: {
        status: data.key,
      },
    };
    updateSemester(updateData);
  };

  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };

  const columns: TableColumnsType<TTableData> = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
      render: (item) => {
        let color;
        if (item === "ONGOING") {
          color = "blue";
        }
        if (item === "UPCOMING") {
          color = "green";
        }
        if (item === "ENDED") {
          color = "red";
        }

        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      key: "startDate",
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      key: "endDate",
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(item.key)}>Update</Button>
          </Dropdown>
        );
      },
    },
  ];

  // const onChange: TableProps<TTableData>["onChange"] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra.action === "filter") {
  //     const queryParams: TQueryParam[] = [];

  //     setParams(queryParams);
  //   }
  // };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default RegisteredSemester;
