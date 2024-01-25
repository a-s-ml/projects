type AddressData = {
  category: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({ category, updateFields }: AddressFormProps) {
  return (
    <>
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={category}
        onChange={(e) => updateFields({ category: e.target.value })}
      />
    </>
  );
}
