import Description from '../Description';
import Errors from '../Errors';
import Label from '../Label';

import {
  formFieldClasses,
  prefixId
} from '../Util';

const type = 'textfield';


export default function Textfield(props) {
  const {
    disabled,
    errors = [],
    field,
    value = ''
  } = props;

  const {
    description,
    id,
    label,
    validate = {}
  } = field;

  const { required } = validate;

  const onChange = ({ target }) => {
    props.onChange({
      field,
      value: target.value
    });
  };

  return <div class={ formFieldClasses(type, errors) }>
    <Label
      id={ prefixId(id) }
      label={ label }
      required={ required } />
    <input
      class="fjs-input"
      disabled={ disabled }
      id={ prefixId(id) }
      onInput={ onChange }
      type="text"
      value={ value } />
    <Description description={ description } />
    <Errors errors={ errors } />
  </div>;
}

Textfield.create = function(options = {}) {
  return {
    ...options
  };
};

Textfield.type = type;
Textfield.label = 'Text Field';
Textfield.keyed = true;