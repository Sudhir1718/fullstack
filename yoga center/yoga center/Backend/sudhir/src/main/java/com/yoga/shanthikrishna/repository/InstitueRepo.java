package com.yoga.shanthikrishna.repository;
import com.yoga.shanthikrishna.entity.Institue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstitueRepo extends JpaRepository<Institue,Long> {

}
