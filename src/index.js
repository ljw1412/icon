var svgs = require.context('./svg', false, /\.svg$/)
var requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(svgs)
