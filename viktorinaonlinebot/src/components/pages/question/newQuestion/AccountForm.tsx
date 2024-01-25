type AccountData = {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  answer1,
  answer2,
  answer3,
  answer4,
  updateFields,
}: AccountFormProps) {
  return (
    <>
      <label>Email</label>
      <input
        autoFocus
        required
        type="text"
        value={answer1}
        onChange={(e) => updateFields({ answer1: e.target.value })}
      />
      <label>Email</label>
      <input
        autoFocus
        required
        type="text"
        value={answer2}
        onChange={(e) => updateFields({ answer2: e.target.value })}
      />
      <label>Email</label>
      <input
        autoFocus
        required
        type="text"
        value={answer3}
        onChange={(e) => updateFields({ answer3: e.target.value })}
      />
      <label>Email</label>
      <input
        autoFocus
        required
        type="text"
        value={answer4}
        onChange={(e) => updateFields({ answer4: e.target.value })}
      />
    </>
  );
}
