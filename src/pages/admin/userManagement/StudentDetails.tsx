import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();

  return (
    <div>
      <h1>{studentId}</h1>
    </div>
  );
};

export default StudentDetails;
<h1>StudentDetails</h1>;
