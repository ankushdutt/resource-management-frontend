export default function Lecturehall(props) {
  return (
    <div className="h-100 flex justify-center bg-teal-lightest font-sans items-center">
      <p className="w-full text-grey-darkest">{props.id}</p>
    </div>
  );
}
