// components/ui/input.tsx
import { TextInput, TextInputProps } from "react-native";

export function Input(props: TextInputProps) {
  return (
    <TextInput
      className="border rounded-md px-3 py-2 w-full"
      {...props}
    />
  );
}
