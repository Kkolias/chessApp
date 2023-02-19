<template>
  <div class="component-ChessBoard">
    <div class="board-wrapper">
      <div v-if="showBoard" class="board">
        <div class="row odd 8">
          <button
            class="column a"
            ref="a8"
            :style="columnStyle('a8')"
            @click="handleClick('a8')"
          >
            <p class="number">8</p>
          </button>
          <button
            class="column b pawn"
            ref="b8"
            :style="columnStyle('b8')"
            @click="handleClick('b8')"
          ></button>
          <button
            class="column c"
            ref="c8"
            :style="columnStyle('c8')"
            @click="handleClick('c8')"
          ></button>
          <button
            class="column d"
            ref="d8"
            :style="columnStyle('d8')"
            @click="handleClick('d8')"
          ></button>
          <button
            class="column e"
            ref="e8"
            :style="columnStyle('e8')"
            @click="handleClick('e8')"
          ></button>
          <button
            class="column f"
            ref="f8"
            :style="columnStyle('f8')"
            @click="handleClick('f8')"
          ></button>
          <button
            class="column g"
            ref="g8"
            :style="columnStyle('g8')"
            @click="handleClick('g8')"
          ></button>
          <button
            class="column h"
            ref="h8"
            :style="columnStyle('h8')"
            @click="handleClick('h8')"
          ></button>
        </div>
        <div class="row 7">
          <button
            class="column a"
            ref="a7"
            :style="columnStyle('a7')"
            @click="handleClick('a7')"
          >
            <p class="number">7</p>
          </button>
          <button
            class="column b"
            ref="b7"
            :style="columnStyle('b7')"
            @click="handleClick('b7')"
          ></button>
          <button
            class="column c"
            ref="c7"
            :style="columnStyle('c7')"
            @click="handleClick('c7')"
          ></button>
          <button
            class="column d"
            ref="d7"
            :style="columnStyle('d7')"
            @click="handleClick('d7')"
          ></button>
          <button
            class="column e"
            ref="e7"
            :style="columnStyle('e7')"
            @click="handleClick('e7')"
          ></button>
          <button
            class="column f"
            ref="f7"
            :style="columnStyle('f7')"
            @click="handleClick('f7')"
          ></button>
          <button
            class="column g"
            ref="g7"
            :style="columnStyle('g7')"
            @click="handleClick('g7')"
          ></button>
          <button
            class="column h"
            ref="h7"
            :style="columnStyle('h7')"
            @click="handleClick('h7')"
          ></button>
        </div>
        <div class="row odd 6">
          <button
            class="column a"
            ref="a6"
            :style="columnStyle('a6')"
            @click="handleClick('a6')"
          >
            <p class="number">6</p>
          </button>
          <button
            class="column b"
            ref="b6"
            :style="columnStyle('b6')"
            @click="handleClick('b6')"
          ></button>
          <button
            class="column c"
            ref="c6"
            :style="columnStyle('c6')"
            @click="handleClick('c6')"
          ></button>
          <button
            class="column d"
            ref="d6"
            :style="columnStyle('d6')"
            @click="handleClick('d6')"
          ></button>
          <button
            class="column e"
            ref="e6"
            :style="columnStyle('e6')"
            @click="handleClick('e6')"
          ></button>
          <button
            class="column f"
            ref="f6"
            :style="columnStyle('f6')"
            @click="handleClick('f6')"
          ></button>
          <button
            class="column g"
            ref="g6"
            :style="columnStyle('g6')"
            @click="handleClick('g6')"
          ></button>
          <button
            class="column h"
            ref="h6"
            :style="columnStyle('h6')"
            @click="handleClick('h6')"
          ></button>
        </div>
        <div class="row 5">
          <button
            class="column a"
            ref="a5"
            :style="columnStyle('a5')"
            @click="handleClick('a5')"
          >
            <p class="number">5</p>
          </button>
          <button
            class="column b"
            ref="b5"
            :style="columnStyle('b5')"
            @click="handleClick('b5')"
          ></button>
          <button
            class="column c"
            ref="c5"
            :style="columnStyle('c5')"
            @click="handleClick('c5')"
          ></button>
          <button
            class="column d"
            ref="d5"
            :style="columnStyle('d5')"
            @click="handleClick('d5')"
          ></button>
          <button
            class="column e"
            ref="e5"
            :style="columnStyle('e5')"
            @click="handleClick('e5')"
          ></button>
          <button
            class="column f"
            ref="f5"
            :style="columnStyle('f5')"
            @click="handleClick('f5')"
          ></button>
          <button
            class="column g"
            ref="g5"
            :style="columnStyle('g5')"
            @click="handleClick('g5')"
          ></button>
          <button
            class="column h"
            ref="h5"
            :style="columnStyle('h5')"
            @click="handleClick('h5')"
          ></button>
        </div>
        <div class="row odd 4">
          <button
            class="column a"
            ref="a4"
            :style="columnStyle('a4')"
            @click="handleClick('a4')"
          >
            <p class="number">4</p>
          </button>
          <button
            class="column b"
            ref="b4"
            :style="columnStyle('b4')"
            @click="handleClick('b4')"
          ></button>
          <button
            class="column c"
            ref="c4"
            :style="columnStyle('c4')"
            @click="handleClick('c4')"
          ></button>
          <button
            class="column d"
            ref="d4"
            :style="columnStyle('d4')"
            @click="handleClick('d4')"
          ></button>
          <button
            class="column e"
            ref="e4"
            :style="columnStyle('e4')"
            @click="handleClick('e4')"
          ></button>
          <button
            class="column f"
            ref="f4"
            :style="columnStyle('f4')"
            @click="handleClick('f4')"
          ></button>
          <button
            class="column g"
            ref="g4"
            :style="columnStyle('g4')"
            @click="handleClick('g4')"
          ></button>
          <button
            class="column h"
            ref="h4"
            :style="columnStyle('h4')"
            @click="handleClick('h4')"
          ></button>
        </div>
        <div class="row 3">
          <button
            class="column a"
            ref="a3"
            :style="columnStyle('a3')"
            @click="handleClick('a3')"
          >
            <p class="number">3</p>
          </button>
          <button
            class="column b"
            ref="b3"
            :style="columnStyle('b3')"
            @click="handleClick('b3')"
          ></button>
          <button
            class="column c"
            ref="c3"
            :style="columnStyle('c3')"
            @click="handleClick('c3')"
          ></button>
          <button
            class="column d"
            ref="d3"
            :style="columnStyle('d3')"
            @click="handleClick('d3')"
          ></button>
          <button
            class="column e"
            ref="e3"
            :style="columnStyle('e3')"
            @click="handleClick('e3')"
          ></button>
          <button
            class="column f"
            ref="f3"
            :style="columnStyle('f3')"
            @click="handleClick('f3')"
          ></button>
          <button
            class="column g"
            ref="g3"
            :style="columnStyle('g3')"
            @click="handleClick('g3')"
          ></button>
          <button
            class="column h"
            ref="h3"
            :style="columnStyle('h3')"
            @click="handleClick('h3')"
          ></button>
        </div>
        <div class="row odd 2">
          <button
            class="column a"
            ref="a2"
            :style="columnStyle('a2')"
            @click="handleClick('a2')"
          >
            <p class="number">2</p>
          </button>
          <button
            class="column b"
            ref="b2"
            :style="columnStyle('b2')"
            @click="handleClick('b2')"
          ></button>
          <button
            class="column c"
            ref="c2"
            :style="columnStyle('c2')"
            @click="handleClick('c2')"
          ></button>
          <button
            class="column d"
            ref="d2"
            :style="columnStyle('d2')"
            @click="handleClick('d2')"
          ></button>
          <button
            class="column e"
            ref="e2"
            :style="columnStyle('e2')"
            @click="handleClick('e2')"
          ></button>
          <button
            class="column f"
            ref="f2"
            :style="columnStyle('f2')"
            @click="handleClick('f2')"
          ></button>
          <button
            class="column g"
            ref="g2"
            :style="columnStyle('g2')"
            @click="handleClick('g2')"
          ></button>
          <button
            class="column h"
            ref="h2"
            :style="columnStyle('h2')"
            @click="handleClick('h2')"
          ></button>
        </div>
        <div class="row 1">
          <button
            class="column a"
            ref="a1"
            :style="columnStyle('a1')"
            @click="handleClick('a1')"
          >
            <p class="number-alphabet">A1</p>
          </button>
          <button
            class="column b"
            ref="b1"
            :style="columnStyle('b1')"
            @click="handleClick('b1')"
          >
            <p class="alphabet">B</p>
          </button>
          <button
            class="column c"
            ref="c1"
            :style="columnStyle('c1')"
            @click="handleClick('c1')"
          >
            <p class="alphabet">C</p>
          </button>
          <button
            class="column d"
            ref="d1"
            :style="columnStyle('d1')"
            @click="handleClick('d1')"
          >
            <p class="alphabet">D</p>
          </button>
          <button
            class="column e"
            ref="e1"
            :style="columnStyle('e1')"
            @click="handleClick('e1')"
          >
            <p class="alphabet">E</p>
          </button>
          <button
            class="column f"
            ref="f1"
            :style="columnStyle('f1')"
            @click="handleClick('f1')"
          >
            <p class="alphabet">F</p>
          </button>
          <button
            class="column g"
            ref="g1"
            :style="columnStyle('g1')"
            @click="handleClick('g1')"
          >
            <p class="alphabet">G</p>
          </button>
          <button
            class="column h"
            ref="h1"
            :style="columnStyle('h1')"
            @click="handleClick('h1')"
          >
            <p class="alphabet">H</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ChessPieceItem } from '../interfaces/chess'
import computedFile from './ChessBoard.vue.computed'
import service from './ChessBoard.service'
export default {
  props: {
    positionWhites: { type: Object, default: () => null },
    positionBlacks: { type: Object, default: () => null },
  },
  data: () => ({
    selectedPiece: null,
  }),
  computed: {
    ...computedFile,
    showBoard(): boolean {
      return !!this.positionBlacks || !!this.positionWhites
    },
  },
  methods: {
    findPieceFoorCoordinate(coordinate: string): ChessPieceItem {
      const pieceBlack: any =
        Object.values(this.positionBlacks)?.find(
          (piece: ChessPieceItem) =>
            piece.position === coordinate && !piece.dead
        ) || null
      if (pieceBlack) return pieceBlack
      const pieceWhite: any =
        Object.values(this.positionWhites)?.find(
          (piece: ChessPieceItem) =>
            piece.position === coordinate && !piece.dead
        ) || null
      return pieceWhite
    },
    isSelectedPiece(piece: ChessPieceItem):boolean {
        if(!this.selectedPiece) return false
        return piece.id === this.selectedPiece?.id
    },
    columnStyle(coordinate: string) {
      const piece = this.findPieceFoorCoordinate(coordinate)
      if (!piece) return null
      if(this.isSelectedPiece(piece)) {
        return {
        backgroundImage: `url(${piece.icon})`,
        backgroundColor: '#a3744e'
      }
      }
      return {
        backgroundImage: `url(${piece.icon})`,
      }
    },

    handleClick(coordinate: string): void {
      const { selectedPiece } = this
      const pieceOfCoordinate = this.findPieceFoorCoordinate(coordinate)
      if(!selectedPiece && !pieceOfCoordinate) {
        return
      }
      if (!selectedPiece && pieceOfCoordinate) {
        this.setSelectedPiece(pieceOfCoordinate)
        return
      }
      if(service.coordinateHasOwnPiece(pieceOfCoordinate, selectedPiece)) {
        this.setSelectedPiece(pieceOfCoordinate)
        return
      }

      const { movedPiece, eatenPiece, didMove } = service.handleMove(
        coordinate,
        selectedPiece,
        this.positionWhites,
        this.positionBlacks
      )
      if (!didMove) return

      this.$emit('movePiece', {
        position: movedPiece.position,
        id: movedPiece.id,
        side: movedPiece.side,
      })

      this.setSelectedPiece(null)
    },
    setSelectedPiece(piece: ChessPieceItem | null): void {
      this.selectedPiece = piece
    },
  },
}
</script>

<style lang="less" scoped>
.component-ChessBoard {
  width: 100%;

  button {
    all: unset;
    cursor: pointer;
  }
  .board-wrapper {
    width: 528px;
    margin: auto;
    margin-top: 40px;

    .board {
      height: 528px;
      width: 528px;
      position: relative;
      display: flex;
      flex-direction: column;
      .row {
        height: 66px;
        width: 100%;
        position: relative;

        display: flex;
        flex-direction: row;

        &:nth-child(odd) {
          .column {
            &:nth-child(even) {
              background: var(--chess-color-1);
            }
            &:nth-child(odd) {
              background: var(--chess-color-2);
            }
          }
        }
        &:nth-child(even) {
          .column {
            &:nth-child(even) {
              background: var(--chess-color-2);
            }
            &:nth-child(odd) {
              background: var(--chess-color-1);
            }
          }
        }

        .column {
          width: 66px;
          height: 100%;
          position: relative;

          .number-alphabet {
            position: absolute;
            bottom: 2px;
            left: 2px;
            padding: 0;
            margin: 0;
          }
          .number,
          .alphabet {
            position: absolute;
            bottom: 2px;
            left: 2px;
            padding: 0;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
