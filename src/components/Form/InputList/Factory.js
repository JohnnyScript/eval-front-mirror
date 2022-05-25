import { InputList } from './InputList';

export class InputListFactory {
  get type() {
    return 'LIST';
  }

  create(item) {
    let defaultValue = null;

    if (item?.isQuestionTeam && item.defaultValue) {
      const p = item.code.indexOf(':');
      const id = item.code.slice(p + 1);
      defaultValue = JSON.parse(item.defaultValue)[id];
    } else {
      defaultValue = item.defaultValue;
    }

    return (
      <InputList
        key={item.name}
        control={item.control}
        errors={item.errors}
        id={item.id}
        name={item.code}
        subtitle={item.criterion}
        title={item.question}
        type={item.type}
        value={item.value}
        options={item.values}
        defaultValue={defaultValue}
      />
    );
  }
}
