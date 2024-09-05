import { FieldErrors } from "react-hook-form";

interface ErrorListType {
  errors: FieldErrors;
}

function ErrorList({ errors }: ErrorListType) {
  const errorEntries = Object.entries(errors);
  return (
    <ul className={`${errorEntries.length ? "mt-7 " : ""}text-sm mx-auto`}>
      {errorEntries.map((error, idx) => (
        <li key={`error-${idx}`}>✅ {error[1]?.message?.toString()}</li>
      ))}
    </ul>
  );
}

export default ErrorList;
