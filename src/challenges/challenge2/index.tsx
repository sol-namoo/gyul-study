import { Autocomplete } from './component/Autocomplete';
import { items } from './items';

function Challenge2() {
  return (
    <div className="w-96 mx-auto min-h-screen my-12">
      <h1 className="text-2xl">Autocomplete</h1>
      <div className="mt-4">
        <Autocomplete
          source={items}
          onSelected={(item) => {
            console.log('💡 selected', item);
          }}
        />
      </div>
    </div>
  );
}

export default Challenge2;
