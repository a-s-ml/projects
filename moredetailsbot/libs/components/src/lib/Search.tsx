export interface SearchProps {
  name: string;
  text: string;
  time: string;
}

export function Search({ name, text, time }: SearchProps) {
  return (
    <div className="py-2 px-2 bg-grey-lightest">
      <input
        type="text"
        className="w-full px-2 py-2 text-sm"
        placeholder="Search or start new chat"
      />
    </div>
  );
}

export default Search;
