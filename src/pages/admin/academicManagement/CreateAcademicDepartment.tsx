import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";

const CreateAcademicDepartment = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const toastId = toast.loading("Creating...");

    // const name = semesterOptions[Number(data?.name) - 1]?.label;

    // const semesterData = {
    //   name,
    //   code: data.name,
    //   year: data.year,
    //   startMonth: data.startMonth,
    //   endMonth: data.endMonth,
    // };

    // try {
    //   const res = (await addAcademicSemester(semesterData)) as TResponse;
    //   if (res?.error) {
    //     toast.error(res?.error?.data.message, { id: toastId });
    //   } else {
    //     toast.success("Academic Semester Created");
    //   }
    // } catch (err) {
    //   toast.error("Something went wrong", { id: toastId });
    // }
  };
  return (
    <div>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm onSubmit={onSubmit}>
            <PHInput
              type="text"
              name="academicDepartment"
              label="Academic Department"
            />
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicDepartment;
