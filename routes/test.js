module.exports = {
  path: '/color',
  code: `
    $ignore[Check docs to see how does functions work ;)]
    $if[$getQuery[hex]==undefined||$isValidHex[$getQuery[hex]]==false;
        $send[400;json;{
            "error": "Invalid hex color code provided"
        }]
        $break $ignore[Now we're breaking it to stop executing the left code]
    ]

    $createCanvas[512;512]
    $color[$getQuery[hex]]
    $drawRect[0;0;512;512]
    $send[200;canvas;$default]
    `
};
