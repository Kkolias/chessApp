<template>
  <div class="component-Chess-game">
    <ChessBoard
      :positionBlacks="piecesBlack"
      :positionWhites="piecesWhite"
      @movePiece="movePiece"
    />
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    piecesBlack: {
      pawn1_b: {
        value: 'pawn',
        id: 'pawn1_b',
        side: 'black',
        dead: false,
        position: 'a7',
        icon: 'svg/chess-pawn-b.svg',
        hasMoved: false,
      },
      pawn2_b: {
        value: 'pawn',
        id: 'pawn2_b',
        side: 'black',
        dead: false,
        position: 'b7',
        icon: 'svg/chess-pawn-b.svg',
        hasMoved: false,
      },
      pawn3_b: {
        value: 'pawn',
        id: 'pawn3_b',
        side: 'black',
        dead: false,
        position: 'c7',
        icon: 'svg/chess-pawn-b.svg',
        hasMoved: false,
      },
      pawn4_b: {
        value: 'pawn',
        id: 'pawn4_b',
        side: 'black',
        dead: false,
        position: 'd7',
        icon: 'svg/chess-pawn-b.svg',
        hasMoved: false,
      },
      pawn5_b: {
        value: 'pawn',
        id: 'pawn5_b',
        side: 'black',
        dead: false,
        position: 'e7',
        icon: 'svg/chess-pawn-b.svg',
        hasMoved: false,
      },
      pawn6_b: {
        value: 'pawn',
        id: 'pawn6_b',
        side: 'black',
        dead: false,
        position: 'f7',
        icon: 'svg/chess-pawn-b.svg',
        hasMoved: false,
      },
      pawn7_b: {
        value: 'pawn',
        id: 'pawn7_b',
        side: 'black',
        dead: false,
        position: 'g7',
        icon: 'svg/chess-pawn-b.svg',
        hasMoved: false,
      },
      pawn8_b: {
        value: 'pawn',
        id: 'pawn8_b',
        side: 'black',
        dead: false,
        position: 'h7',
        icon: 'svg/chess-pawn-b.svg',
        hasMoved: false,
      },
      rook1_b: {
        value: 'rook',
        id: 'rook1_b',
        side: 'black',
        dead: false,
        position: 'a8',
        icon: 'svg/chess-rook-b.svg',
        hasMoved: false,
      },
      rook2_b: {
        value: 'rook',
        id: 'rook2_b',
        side: 'black',
        dead: false,
        position: 'h8',
        icon: 'svg/chess-rook-b.svg',
        hasMoved: false,
      },
      knight1_b: {
        value: 'knight',
        id: 'knight1_b',
        side: 'black',
        dead: false,
        position: 'g8',
        icon: 'svg/chess-knight-b.svg',
        hasMoved: false,
      },
      knight2_b: {
        value: 'knight',
        id: 'knight2_b',
        side: 'black',
        dead: false,
        position: 'b8',
        icon: 'svg/chess-knight-b.svg',
        hasMoved: false,
      },
      bishop1_b: {
        value: 'bishop',
        id: 'bishop1_b',
        side: 'black',
        dead: false,
        position: 'c8',
        icon: 'svg/chess-bishop-b.svg',
        hasMoved: false,
      },
      bishop2_b: {
        value: 'bishop',
        id: 'bishop2_b',
        side: 'black',
        dead: false,
        position: 'f8',
        icon: 'svg/chess-bishop-b.svg',
        hasMoved: false,
      },
      king_b: {
        value: 'king',
        id: 'king_b',
        side: 'black',
        dead: false,
        position: 'd8',
        icon: 'svg/chess-king-b.svg',
        hasMoved: false,
      },
      queen_b: {
        value: 'queen',
        id: 'queen_b',
        side: 'black',
        dead: false,
        position: 'e8',
        icon: 'svg/chess-queen-b.svg',
        hasMoved: false,
      },
    },
    piecesWhite: {
      pawn1_w: {
        value: 'pawn',
        id: 'pawn1_w',
        side: 'white',
        dead: false,
        position: 'a2',
        icon: '/svg/chess-pawn-w.svg',
        hasMoved: false,
      },
      pawn2_w: {
        value: 'pawn',
        id: 'pawn2_w',
        side: 'white',
        dead: false,
        position: 'b2',
        icon: 'svg/chess-pawn-w.svg',
        hasMoved: false,
      },
      pawn3_w: {
        value: 'pawn',
        id: 'pawn3_w',
        side: 'white',
        dead: false,
        position: 'c2',
        icon: 'svg/chess-pawn-w.svg',
        hasMoved: false,
      },
      pawn4_w: {
        value: 'pawn',
        id: 'pawn4_w',
        side: 'white',
        dead: false,
        position: 'd2',
        icon: 'svg/chess-pawn-w.svg',
        hasMoved: false,
      },
      pawn5_w: {
        value: 'pawn',
        id: 'pawn5_w',
        side: 'white',
        dead: false,
        position: 'e2',
        icon: 'svg/chess-pawn-w.svg',
        hasMoved: false,
      },
      pawn6_w: {
        value: 'pawn',
        id: 'pawn6_w',
        side: 'white',
        dead: false,
        position: 'f2',
        icon: 'svg/chess-pawn-w.svg',
        hasMoved: false,
      },
      pawn7_w: {
        value: 'pawn',
        id: 'pawn7_w',
        side: 'white',
        dead: false,
        position: 'g2',
        icon: 'svg/chess-pawn-w.svg',
        hasMoved: false,
      },
      pawn8_w: {
        value: 'pawn',
        id: 'pawn8_w',
        side: 'white',
        dead: false,
        position: 'h2',
        icon: 'svg/chess-pawn-w.svg',
        hasMoved: false,
      },
      rook1_w: {
        value: 'rook',
        id: 'rook1_w',
        side: 'white',
        dead: false,
        position: 'a1',
        icon: 'svg/chess-rook-w.svg',
        hasMoved: false,
      },
      rook2_w: {
        value: 'rook',
        id: 'rook2_w',
        side: 'white',
        dead: false,
        position: 'h1',
        icon: 'svg/chess-rook-w.svg',
        hasMoved: false,
      },
      knight1_w: {
        value: 'knight',
        id: 'knight1_w',
        side: 'white',
        dead: false,
        position: 'g1',
        icon: 'svg/chess-knight-w.svg',
        hasMoved: false,
      },
      knight2_w: {
        value: 'knight',
        id: 'knight2_w',
        side: 'white',
        dead: false,
        position: 'b1',
        icon: 'svg/chess-knight-w.svg',
        hasMoved: false,
      },
      bishop1_w: {
        value: 'bishop',
        id: 'bishop1_w',
        side: 'white',
        dead: false,
        position: 'c1',
        icon: 'svg/chess-bishop-w.svg',
        hasMoved: false,
      },
      bishop2_w: {
        value: 'bishop',
        id: 'bishop2_w',
        side: 'white',
        dead: false,
        position: 'f1',
        icon: 'svg/chess-bishop-w.svg',
        hasMoved: false,
      },
      king_w: {
        value: 'king',
        id: 'king_w',
        side: 'white',
        dead: false,
        position: 'd1',
        icon: 'svg/chess-king-w.svg',
        hasMoved: false,
      },
      queen_w: {
        value: 'queen',
        id: 'queen_w',
        side: 'white',
        dead: false,
        position: 'e1',
        icon: 'svg/chess-queen-w.svg',
        hasMoved: false,
      },
    },
  }),
  methods: {
    movePiece({ position, id, side }) {
      const sideKey = side === 'white' ? 'piecesWhite' : 'piecesBlack'

      this[sideKey][id].position = position
      this[sideKey][id].hasMoved = true
    },
  },
}
</script>

<style lang="less" scoped>
.component-Chess-game {
}
</style>
