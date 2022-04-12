import * as React from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Style from "../style/TopPage.module.scss"


export const TopPage = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={Style.body}>
            <h1 className={Style.h1}>トップページ</h1>

            <Button variant="outlined" color="primary" style={{ marginBottom: "20px" }} onClick={handleClickOpen}>ニュース</Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{"新着ニュース"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <p>・マスターズ開幕 松山英樹 第1ラウンドはイーブンパー</p>
                        <p>・カブス 鈴木誠也が先発出場 大リーグデビュー戦で初ヒット</p>
                        <p>・孤独を感じる人は問題が長期化する傾向も 政府が初の全国調査</p>
                        <p>・ロシアとベラルーシの最恵国待遇 取り消しへ 米議会が法案可決</p>
                        <p>・ブルージェイズ 加藤豪将 日本野手初プロ野球経ず大リーグ入り</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={handleClose}>戻る</Button>
                </DialogActions>
            </Dialog>

            <p className={Style.p}>
                ・ウクライナ南東部マリウポリ市長、犠牲者「2万人超か」（写真=ロイター）
                日本経済新聞<br></br>
                ・5 時間前
                マリウポリ陥落間近か ウクライナ「最後の戦い」に備え（ＡＦＰ＝時事） - Yahoo!ニュース
                Yahoo!ニュース<br />
                ・8 時間前
                【速報】ロシア軍、マリウポリ制圧迫る ウクライナ侵攻
                KyodoNews<br />
                ・1 時間前
                要衝マリウポリ制圧へロシア攻勢 陥落目前、大統領「死者数万人」
                琉球新報デジタル<br />
                ・3 時間前
                弾薬補給なく「最後の戦い」、戦況厳しいマリウポリ ウクライナ報道（朝日新聞デジタル） - Yahoo!ニュース
            </p>

            <p className={Style.p}>【ワシントン＝山内竜介、ロンドン＝池田晋一】<br />
                &emsp;米国のバイデン政権は６日、ロシア最大手銀行ズベルバンクの
                資産凍結や米国との取引禁止などを盛り込んだ新たな追加制裁を発表した。英国も６日、ロシア産石炭の輸入を今
                年末までに止める追加制裁を打ち出した。ウクライナに侵攻したロシア軍が多数の民間人を殺害した疑いが強まっ
                たことを踏まえ、先進７か国（Ｇ７）はロシアへの圧力をさらに強める方針だ。<br />

                &emsp;バイデン大統領は６日の演説で、「戦争犯罪の責任を追及するため、同盟国は団結しなければならない。ロシアの
                経済的な孤立をさらに深める」と訴えた。<br />

                &emsp;米国はズベルバンクに対し、既に米金融機関との取引を禁じていたが、米国内の資産を凍結し、米国の企業や個人
                との取引も禁止する。ロシア４位で民間銀行最大手のアルファバンクも制裁対象とし、米国と取引できなくする。<br />

                &emsp;ズベルバンクは、世界最大級の国際決済網である国際銀行間通信協会（ＳＷＩＦＴ、本部・ベルギー）からの排除対象
                からは外れていたが、締め付けをより厳しくする。<br />

                &emsp;米国からロシアへの新規投資の全面禁止や、米金融機関を通じた債券の償還や利払いの禁止も盛り込んだ。米財務省は
                ドル建てロシア国債の支払いを認めず、ロシアが債務不履行（デフォルト）に陥る可能性が高まっている。
            </p>

            <p className={Style.p}>
                山形県は12日、新たに10歳未満から90歳以上の男女235人が新型コロナウイルスに感染したと発表。感染者の公表は98日連続。200人台は5日ぶり。累計感染者数は1万9，668人となった。またクラスターも複数発生し午後詳細発表予定。
            </p>

        </div>
    )
}