import toastr from "toastr";

toastr.options.positionClass = 'toast-bottom-right'

const error = (desc, heading = null) => {
  toastr.error(desc, heading)
}

export default { error }
