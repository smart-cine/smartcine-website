import { cn } from '@/lib/utils';

export function AgeTag({
  className,
  restrictAge,
}: {
  readonly className?: string;
  readonly restrictAge: number;
}) {
  return (
    <div
      className={cn(
        'flex max-h-[20px] max-w-fit items-center justify-center rounded-sm bg-blue-500 p-0.5 px-1 text-xs font-semibold text-gray-100 text-opacity-95',
        {
          'bg-blue-500': restrictAge >= 10,
          'bg-green-500': restrictAge >= 13,
          'bg-yellow-500': restrictAge >= 16,
          'bg-red-500': restrictAge >= 18,
        },
        className
      )}
    >
      <p>{restrictAge}</p>
      <p className='relative -top-[1px]'>+</p>
    </div>
  );
}
