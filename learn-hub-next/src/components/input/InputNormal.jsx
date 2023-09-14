import { Input } from "@material-tailwind/react";

export function InputDefault(props) {
return (
    <div className="w-72">
        <Input label={props.name} size="lg"/>
    </div>
);
}