package br.com.gabrizord.gzgestao.model;


import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Data
@EqualsAndHashCode(of = "id")
@Entity
@Table(name = "employees")
public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;

    @Column(length = 15)
    private String position;

    @Column(unique = true)
    private String email;

    @Column(length = 15)
    private String phoneNumber;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
