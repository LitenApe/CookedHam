import {
  ComponentProps,
  createElement,
  createRef,
  FocusEvent,
  ForwardedRef,
  forwardRef,
} from 'react';
import { getDocument } from '../../utils/functions/getDocument';
import { isNull } from '../../utils/functions/isNull';
import { isUndefined } from '../../utils/functions/isUndefined';
import { mergeRefs } from '../../utils/functions/mergeRefs';
import Field from '../field/Field';

function RadioGroup(
  props: ComponentProps<'fieldset'> & ComponentProps<'input'>,
  ref: ForwardedRef<HTMLFieldSetElement>
): JSX.Element {
  const fieldsetRef = createRef<HTMLFieldSetElement>();
  const { children, onBlur, ...rest } = props;

  function onBlurHandler(event: FocusEvent<HTMLInputElement>) {
    if (isUndefined(onBlur)) {
      return;
    }

    event.persist();
    // focus might move to body before it moves to the new element.
    setTimeout(() => {
      const groupContainer = fieldsetRef.current;
      const newFocus = getDocument().activeElement;

      if (isNull(groupContainer) || isNull(newFocus)) {
        // cant calculate if focus is still inside group
        // if we don't have a ref to the container and
        // the new element with focus
        return onBlur(event);
      }

      const compared = groupContainer.compareDocumentPosition(newFocus);
      if (compared & Node.DOCUMENT_POSITION_CONTAINS) {
        onBlur(event);
      }
    }, 0);
  }

  return createElement(
    Field,
    { ...rest, onBlur: onBlurHandler },
    createElement(
      'fieldset',
      { role: 'radiogroup', ref: mergeRefs(ref, fieldsetRef) },
      children
    )
  );
}

export default forwardRef(RadioGroup);
