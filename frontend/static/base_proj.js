/////////////////// PROTEIN DETAIL PAGE //////////////////////

function chunkString(str, len) {
  var _size = Math.ceil(str.length / len),
    _ret = new Array(_size),
    _offset

  for (var _i = 0; _i < _size; _i++) {
    _offset = _i * len
    _ret[_i] = str.substring(_offset, _offset + len)
  }

  return _ret
}

function tooltipwrap(chunk, index, skipV2) {
  var out = ""
  for (var i = 0; i < chunk.length; i++) {
    let ind
    if (skipV2) {
      if (+index + i < 1) {
        ind = +index + i + 1
      } else if (+index + i === 1) {
        ind = "1a"
      } else if (+index + i > 1) {
        ind = +index + i
      }
    } else {
      ind = +index + i + 1
    }
    out +=
      '<span data-toggle="tooltip" data-placement="top" title="' +
      chunk[i] +
      " " +
      ind +
      '">' +
      chunk[i] +
      "</span>"
  }
  return out
}

function formatAAseq(elem, breakpoint) {
  breakpoint = breakpoint || 10
  //clear any existing counts
  elem.find(".sequence_count").empty()
  // extract the string and chop it up into segments by breakpoint
  if (elem.text().startsWith("MVSKGEEL")) {
    var skipV2 = true
  }
  const words = chunkString(elem.text().replace(/ /g, ""), breakpoint)
  // clear the div
  elem.empty()
  //console.log(words)
  // create new divs for the formatted content
  const seqcount = $("<div class='sequence_count'></div>").appendTo(elem)
  const seqdiv = $("<div class='formatted_aminosquence'></div>").appendTo(elem)
  seqdiv.html(tooltipwrap(words[0], 0, skipV2))
  seqcount.append(1 + "<br>")
  var height = seqdiv.height()
  for (var i = 1; i < words.length; i++) {
    var tippywords = tooltipwrap(words[i], i * 10, skipV2)
    seqdiv.html(seqdiv.html() + " " + tippywords)
    if (seqdiv.height() > height) {
      // line break occured at iteration i
      //console.log(words[i])
      seqcount.append(i * breakpoint + 1 + "<br>")
      height = seqdiv.height()
    }
  }
  elem.show()
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "hover",
    delay: { show: 200 }
  })
}

$(function() {
  setTimeout(function() {
    // waiting is just a hack...
    $(".aminosequence").each(function() {
      formatAAseq($(this))
    })
  }, 1)
})

$(window).resize(function() {
  $(".aminosequence").each(function() {
    formatAAseq($(this))
  })
})

$("#refModalForm").submit(function(e) {
  var form = $(this).closest("form")
  $.ajax({
    type: "POST",
    url: form.attr("data-action-url"),
    data: form.serialize(),
    dataType: "json",
    success: function(data) {
      if (data.status === "success") {
        window.location.reload()
      }
    }
  })
  e.preventDefault() // avoid to execute the actual submit of the form.
})

$("#excerptModalForm").submit(function(e) {
  var form = $(this).closest("form")
  $.ajax({
    type: "POST",
    url: form.attr("data-action-url"),
    data: form.serialize(),
    dataType: "json",
    success: function(data) {
      if (data.status === "success") {
        window.location.reload()
      }
    }
  })
  e.preventDefault() // avoid to execute the actual submit of the form.
})

function register_transition_form() {
  $(".trans_formset_div").formset({
    addText: "Add Transition",
    addCssClass: "btn btn-info mb-4",
    deleteCssClass: "transDelete",
    deleteText: '<i class="fas fa-minus-circle"></i>',
    prefix: "transitions",
    processHidden: true // I added this to
  })
}

// This function is for showing the modal
$(function() {
  $("#show_transition_modal").click(function() {
    $.ajax({
      type: "GET",
      url: $(this).attr("data-action-url"),
      data: {},
      cache: false,
      success: function(data, status) {
        $("#transitionForm").html(data)
        register_transition_form()
        $("#transitionModal").modal()
      }
    })
  })
})

$("#transitionForm").submit(function(e) {
  var form = $(this).closest("form")
  $.ajax({
    type: "POST",
    url: form.attr("data-action-url"),
    data: form.serialize(),
    cache: false,
    success: function(data, status) {
      window.location.reload()
    },
    error: function(data, status, error) {
      $("#transitionForm").html(data.responseText)
      register_transition_form()
    }
  })
  e.preventDefault() // avoid to execute the actual submit of the form.
})

$("#adminApprove, #adminRevert").submit(function(e) {
  var form = $(this).closest("form")
  $.ajax({
    type: "POST",
    url: form.attr("data-action-url"),
    data: form.serialize(),
    dataType: "json",
    success: function(data) {
      window.location = form.data("success")
    }
  })
  e.preventDefault() // avoid to execute the actual submit of the form.
})

/////////////////// END PROTEIN DETAIL PAGE //////////////////////