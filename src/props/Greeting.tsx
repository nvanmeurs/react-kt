export type GreetingProps = {
  language?: 'en' | 'es';
  name: string;
  color?: string;
};

export const Greeting = ({
  name,
  language = 'en',
  color = 'black',
}: GreetingProps) => {
  const greeting = language === 'es' ? 'Hola' : 'Hello';

  return (
    <p style={{ color }}>
      {greeting} {name}
    </p>
  );
};
