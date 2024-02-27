interface DocumentViewProps {
  text: string;
}

export const DocumentView = ({ text }: DocumentViewProps) => {
  return (
    <div>
      <p className="read-the-docs">{text}</p>
    </div>
  );
};
