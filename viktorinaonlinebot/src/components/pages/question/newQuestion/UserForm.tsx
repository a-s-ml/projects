import { FormWrapper } from "./FormWrapper";

type UserData = {
  text: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({ text, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="Текст вопроса">
      <label>Текст вопроса</label>
      <input
        autoFocus
        required
        type="text"
        value={text}
        onChange={(e) => updateFields({ text: e.target.value })}
      />
    </FormWrapper>
  );
}
