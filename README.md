# markus-mui-search-bar

## Installation

```shell
npm i --save markus-agency-mui-search-bar
```
Note: This component is intended to projects using Material-UI v5+

## Usage

Simple usage

```js
import { SearchBar } from 'markus-agency-mui-search-bar';
const requestSearch = searchedVal => {
      /* TODO with searchedVal */ 
};
const cancelSearch = () => {
    /* TODO on cancelSearch */ 
};
return (
  <SearchBar 
      onChange={(searchVal) => requestSearch(searchVal)}
      onCancelSearch={() => cancelSearch()}
  />
);
```
The component supports "debounce" input. The user can define the time period (in ms) for which the component will detect the change and fire the "onChange" event. In this way, the user can avoid searches every time a character is entered.

```js
import { SearchBar } from 'markus-agency-mui-search-bar';
const requestSearch = searchedVal => {
      /* TODO with searchedVal */ 
};
const cancelSearch = () => {
    /* TODO on cancelSearch */ 
};
return (
  <SearchBar 
      searchValue={globalFilterData['search_filter']}
      label={'Search'}
      placeholder="Search name"
      onChange={(searchVal) => requestSearch(searchVal)}
      onCancelSearch={() => cancelSearch()}
      autoComplete={"on"} // off is default
      debounceTime={1000} // in ms
  />
);
```

### SearchBar Properties

| Name             | Type               | Default    | Description                                                           |
| ---------------- | ------------------ | ---------- | ----------------------------------------------------------------------|
| id               | `string`           | `''`       | Component id optional.                                                |
| value            | `string`           | `''`       | The value of the text field.                                          |
| label            | `string`           | `''`       | Sets component label.                                                 |
| placeholder      | `string`           | `''`       | Sets component placeholder                                            |
| onChange         | `func`             |            | Fired when the text value changes.                                    |
| onCancelSearch   | `func`             |            | Fired when the search is cancelled.                                   |
| autoComplete     | `string`           | `'off'`    | Prevent browser to offer autofill and autocomplete for input field.   |
| disabled         | `bool`             | `false`    | Disables text field.                                                  |
| debounceTime     | `number`           | `0`        | Sets a delay between user types and when the input's value is updated.|

\* properties

## License

The files included in this repository are licensed under the MIT license.

