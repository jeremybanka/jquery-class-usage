let color = ''

$(function() {
  $("button#green").click(function() {
    color = 'green'
    console.log('clicked', color, 'button')
    $("body").removeClass()
    $("body").addClass("green-background")
  })

  $("button#yellow").click(function() {
    color = 'yellow'
    console.log('clicked', color, 'button')
    $("body").removeClass()
    $("body").addClass("yellow-background")
  })

  $("button#red").click(function() {
    color = 'red'
    console.log('clicked', color, 'button')
    $("body").removeClass()
    $("body").addClass("red-background")
  })
})