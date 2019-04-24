import { helper } from '@ember/component/helper';

export default helper(function not([x] /*, hash*/) {
  return !x;
});
