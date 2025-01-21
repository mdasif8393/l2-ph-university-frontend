import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement.api";
import { TResponse } from "../../../types";

const CreateCourse = () => {
  const { data: courses } = useGetAllCoursesQuery(undefined);
  const [createCourse] = useAddCourseMutation();

  const preRequisiteCoursesOptions = courses?.data?.map((item: any) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const toastId = toast.loading("Creating...");

    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data?.preRequisiteCourses
        ? data?.preRequisiteCourses.map((item) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };

    try {
      const res = (await createCourse(courseData)) as TResponse<any>;
      if (res?.error) {
        toast.error(res?.error?.data.message, { id: toastId });
      } else {
        toast.success("Course Created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="title" label="Title" />
          <PHInput type="text" name="prefix" label="Prefix" />
          <PHInput type="number" name="code" label="Code" />
          <PHInput type="number" name="credits" label="Credits" />
          <PHSelect
            label="Prerequisites Courses"
            name="preRequisiteCourses"
            options={preRequisiteCoursesOptions}
            mode="multiple"
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
