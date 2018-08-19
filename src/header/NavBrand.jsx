import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'
import { filterProps } from '../utils'

const NavBrand = ({ config, is, children, className, ...rest }) => {
  const Component = is

  return (
    <Component
      {...filterProps(rest, ['header'])}
      className={classnames(
        `text-${config.textColors.on.primary}`,
        `mr-${config.spacing.lg}`,
        'flex items-center flex-no-shrink h-12',
        className,
      )}
    >
      {children}
    </Component>
  )
}

NavBrand.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
}

NavBrand.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
}

export { NavBrand as component }
export default withConfig(NavBrand)
