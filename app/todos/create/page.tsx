import { addTodo } from '@/lib/actions';
import Link from 'next/link';

const Page = async () => {
  return (
    <div className="m-8">
      <Link href="/todos">戻る</Link>
      <h1 className="text-xl font-bold">Todo追加</h1>
      <form className="flex items-center mt-4" action={addTodo}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" className="border mx-2 p-1" />
        <button
          type="submit"
          className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Page;