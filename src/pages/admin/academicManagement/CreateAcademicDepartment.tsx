/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import {
  useAddAcademicDepartmentMutation,
  useGetAllFacultiesQuery,
} from "../../../redux/features/admin/academicManagement.api";

const CreateAcademicDepartment = () => {
  const { data: academicFaculties } = useGetAllFacultiesQuery(undefined);
  const facultyOptions = academicFaculties?.data?.map((faculty) => ({
    value: faculty._id,
    label: faculty.name,
  }));

  const navigate = useNavigate();
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    try {
      const res = (await addAcademicDepartment(data)) as TResponse;
      if (res?.error) {
        toast.error(res?.error?.data.message, { id: toastId });
      } else {
        toast.success("Academic Department Created");
      }
      navigate("/admin/academic-department");
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm onSubmit={onSubmit}>
            <PHSelect
              label="Choose Academic Faculty"
              name="academicFaculty"
              options={facultyOptions}
            />
            <PHInput
              type="text"
              name="name"
              label="Name of Academic Department"
            />
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicDepartment;
