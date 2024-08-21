interface Props {
  text: string;
}

export default function Badge({ text }: Props) {
  return (
    <div className="absolute right-2 bottom-2 px-2 py-1 text-xs text-[#b9bdcc] bg-[#060d17] rounded-sm z-20">
      {text}
    </div>
  );
}
