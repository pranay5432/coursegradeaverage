import {css} from 'goober'
import system, {get} from '@styled-system/css'

export default function styled(node, initialConfig) {
  function update(config) {
    const theme = get(config, 'theme', {});
    const props = get(config, '$$props', config);

    const generateCSS = system(props)(theme);
    const className = css(generateCSS);

    node.classList.add(className);
  }

  update(initialConfig);

  return { update };
}
