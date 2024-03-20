import React from 'react';
import { clients } from '../constants';
import styles, { layout } from '../../style';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} w-full flex-wrap`}>
        {clients.map((client) => {
          const { id, logo } = client;
          return (
            <div
              key={id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
            >
              <img
                src={logo}
                alt="client"
                className=" sm:w-[192px] w-[100px] h-[60px] object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
