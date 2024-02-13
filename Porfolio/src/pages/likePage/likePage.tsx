import React, { FunctionComponent, useEffect, useState } from 'react';
import Song from '../../models/song';
import SONGS from '../../models/mock-song';
import Footer from '../../components/footer/footer';
import SearchBar from '../../components/main/search/search';
import AsideBox from '../../components/asideBox/asideBox';
import LogoHeader from '../../components/header/logoheader';
import styles from './likePage.module.css'
import ListBox from '../../components/main/likepageBox/listBox';


const LikePage: FunctionComponent = () => {
    const [songs, setsongs] = useState<Song[]>([]);

    useEffect(() => {
        setsongs(SONGS);
    }, []);

 return (
    <div >
      <div className={styles.title}>
          <LogoHeader />
      </div >
    <div className={styles.big_box}>
      <AsideBox/>
      <main className={styles.main}>
        <div className={styles.searchBox}>
          <SearchBar />
        </div>
        <ListBox />
      </main>
    </div>
      <Footer />
  </div>
 );
}

export default LikePage;
